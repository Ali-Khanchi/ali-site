"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type TagOption<T> = {
    value: T;
    label: string;
    disabled?: boolean;
};

export type TagBoxProps<T> = {
    /** Controlled selected values */
    value: T[];
    /** Called with the new selected values */
    onChange: (next: T[]) => void;

    /** All selectable options */
    options: TagOption<T>[];

    /** Equality check for T (defaults to Object.is) */
    isEqual?: (a: T, b: T) => boolean;

    /** Optional: disallow selecting more than N tags */
    maxSelected?: number;

    /** Optional UI */
    label?: string;
    placeholder?: string;
    className?: string;

    /** Optional behavior */
    disabled?: boolean;

    /** Optional: called when user tries to exceed maxSelected */
    onMaxSelectedReached?: (max: number) => void;
};

const defaultIsEqual = <T,>(a: T, b: T) => Object.is(a, b);

const includesBy = <T,>(arr: T[], item: T, isEqual: (a: T, b: T) => boolean) =>
    arr.some((x) => isEqual(x, item));

const removeBy = <T,>(arr: T[], item: T, isEqual: (a: T, b: T) => boolean) =>
    arr.filter((x) => !isEqual(x, item));

const addUniqueBy = <T,>(arr: T[], item: T, isEqual: (a: T, b: T) => boolean) =>
    includesBy(arr, item, isEqual) ? arr : [...arr, item];

export default function TagBox<T>(props: TagBoxProps<T>) {
    const {
        value,
        onChange,
        options,
        isEqual = defaultIsEqual,
        maxSelected,
        label,
        placeholder = "Select…",
        className = "",
        disabled = false,
        onMaxSelectedReached,
    } = props;

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const rootRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const selectedOptions = useMemo(
        () => options.filter((opt) => includesBy(value, opt.value, isEqual)),
        [options, value, isEqual]
    );

    const canAddMore = maxSelected == null || value.length < maxSelected;

    const availableOptions = useMemo(() => {
        const q = query.trim().toLowerCase();
        const filtered = q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;

        // Put unselected first (nice UX)
        const unselected = filtered.filter((o) => !includesBy(value, o.value, isEqual));
        const selected = filtered.filter((o) => includesBy(value, o.value, isEqual));
        return [...unselected, ...selected];
    }, [options, query, value, isEqual]);

    const toggle = (opt: TagOption<T>) => {
        if (disabled || opt.disabled) return;

        const isSelected = includesBy(value, opt.value, isEqual);

        if (isSelected) {
            onChange(removeBy(value, opt.value, isEqual));
            return;
        }

        if (!canAddMore) {
            onMaxSelectedReached?.(maxSelected!);
            return;
        }

        onChange(addUniqueBy(value, opt.value, isEqual));
    };

    const clearAll = () => {
        if (disabled) return;
        onChange([]);
    };

    const selectAll = () => {
        if (disabled) return;
        onChange(options.map((o) => o.value));
    };

    // Close on outside click
    useEffect(() => {
        if (!open) return;

        const onDocMouseDown = (e: MouseEvent) => {
            const el = rootRef.current;
            if (!el) return;
            if (!el.contains(e.target as Node)) setOpen(false);
        };

        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, [open]);

    // Close on Escape
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // When opening, focus the search input
    useEffect(() => {
        if (open) {
            setQuery("");
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    }, [open]);

    const dropdownButtonText =
        selectedOptions.length === 0 ? placeholder : `${selectedOptions.length} selected`;

    return (
        <div ref={rootRef} className={`w-full ${className}`}>
            {label && <div className="text-sm font-semibold text-neutral-800 mb-2">{label}</div>}

            {/* Selected tags row */}
            <div className="flex flex-wrap gap-2 items-center mb-3">
                {selectedOptions.length === 0 ? (
                    <span className="text-sm text-neutral-500">{placeholder}</span>
                ) : (
                    selectedOptions.map((opt) => (
                        <span
                            key={opt.label}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm bg-white text-neutral-800"
                        >
                            {opt.label}
                            <button
                                type="button"
                                onClick={() => toggle(opt)}
                                disabled={disabled}
                                className="text-neutral-500 hover:text-neutral-900 disabled:opacity-50"
                                aria-label={`Remove ${opt.label}`}
                                title={`Remove ${opt.label}`}
                            >
                                ×
                            </button>
                        </span>
                    ))
                )}

                {selectedOptions.length > 0 ? (
                    <button
                        type="button"
                        onClick={clearAll}
                        disabled={disabled}
                        className="ml-auto text-sm px-3 py-1 border rounded-md hover:bg-neutral-50 disabled:opacity-50"
                    >
                        Clear
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={selectAll}
                        disabled={disabled}
                        className="ml-auto text-sm px-3 py-1 border rounded-md hover:bg-neutral-50 disabled:opacity-50"
                    >
                        Select All
                    </button>
                )}
            </div>

            {/* Dropdown trigger */}
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen((v) => !v)}
                className={[
                    "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md border text-sm",
                    "bg-white hover:bg-neutral-50",
                    disabled ? "opacity-50 cursor-not-allowed" : "",
                ].join(" ")}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className="text-neutral-800">{dropdownButtonText}</span>
                <span className="text-neutral-500">{open ? "▲" : "▼"}</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="relative">
                    <div className="absolute z-50 mt-2 w-full rounded-md border bg-white shadow-md overflow-hidden">
                        {/* Search */}
                        <div className="p-2 border-b">
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search…"
                                className="w-full px-3 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        {/* List */}
                        <ul className="max-h-72 overflow-auto py-1" role="listbox">
                            {availableOptions.length === 0 ? (
                                <li className="px-3 py-2 text-sm text-neutral-500">No matches</li>
                            ) : (
                                availableOptions.map((opt) => {
                                    const isSelected = includesBy(value, opt.value, isEqual);
                                    const blockedByMax =
                                        !isSelected &&
                                        maxSelected != null &&
                                        value.length >= maxSelected;

                                    const isItemDisabled = disabled || opt.disabled || blockedByMax;

                                    return (
                                        <li key={opt.label}>
                                            <button
                                                type="button"
                                                onClick={() => toggle(opt)}
                                                disabled={isItemDisabled}
                                                className={[
                                                    "w-full flex items-center justify-between px-3 py-2 text-sm text-left",
                                                    isSelected ? "bg-blue-50" : "bg-white",
                                                    !isItemDisabled
                                                        ? "hover:bg-neutral-50"
                                                        : "opacity-50 cursor-not-allowed",
                                                ].join(" ")}
                                                role="option"
                                                aria-selected={isSelected}
                                                title={
                                                    blockedByMax && maxSelected != null
                                                        ? `Maximum ${maxSelected} selected`
                                                        : opt.label
                                                }
                                            >
                                                <span className="text-neutral-800">
                                                    {opt.label}
                                                </span>
                                                <span className="text-neutral-500">
                                                    {isSelected ? "✓" : ""}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })
                            )}
                        </ul>

                        {/* Footer */}
                        {maxSelected != null && (
                            <div className="px-3 py-2 border-t text-xs text-neutral-500">
                                {value.length}/{maxSelected} selected
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
