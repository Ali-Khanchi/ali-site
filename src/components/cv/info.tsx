import { linkStyle } from "./util";

export const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet commodo nunc. Curabitur tellus sem, iaculis ut dictum id, tempor at neque. Proin et metus felis. Nulla aliquet, neque sit amet mollis blandit, risus velit viverra justo, a accumsan turpis mi non tortor. Nulla tempor auctor venenatis. Etiam sollicitudin, libero sed volutpat pretium, metus sem dictum arcu, eget viverra nunc leo ut libero. Donec ut libero nisl. Phasellus faucibus, magna ut laoreet faucibus, est lacus facilisis nulla, vel dignissim lacus tortor eget nibh. Quisque condimentum molestie orci ac pulvinar. Aliquam in elementum metus, id elementum diam. Ut at aliquet neque. Phasellus sed ornare ex, et hendrerit nisi. Cras viverra, dui a faucibus porta, ex mi egestas est, et posuere justo ex nec augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

const headerStyle = "font-bold pt-3";

export const dfcLearnMore = (
    <>
        <h2 className="font-bold">ABOUT</h2>
        <p>
            Dolphin is a modern gym and fitness centre. They have an outdoor swimming pool and do
            fitness classes for both adults and children.
        </p>

        <h2 className={headerStyle}>CHALLENGE</h2>
        <p>
            The fitness centre was previously using a customer management system in which they had
            the data of all their customers. The problem was that it had expired long ago, and they
            couldn't use the programme anymore. Without the programme they had resorted to paper
            which was not as efficient.
        </p>

        <h2 className={headerStyle}>SOLUTION</h2>
        <p>
            While looking for potential projects I found this fitness centre and showed them
            possible solutions I could program for them. When I proposed to them to develop a custom
            software specifically for their needs, they were delighted to hear it. The solution I
            ended up developing not only provided customer management, but also gave them a way to
            create invoices and add fitness packages.
        </p>

        <h2 className={headerStyle}>INTERFACE</h2>
        <p>
            The program has extensive functionality to manage and navigate through different
            layouts, write information about the customer, and an automatic calculation to determine
            the price of fitness packages for a customer.
        </p>

        <h2 className={headerStyle}>BENEFIT</h2>
        <p>
            Dolphin Fitness Centre didn't have to rely on paper anymore and could go back to having
            all their information digitally. They could now not only manage their customers, but
            also their invoices and fitness packages. Additionally, they could print their invoices
            from the computer instead of writing it down on paper as they did before.
        </p>
    </>
);

export const aisLearnMore = (
    <>
        <h2 className="font-bold">ABOUT</h2>
        <p>
            The Australian International School (AIS) is the first Australian school established in
            the Middle East and was formed through a partnership between Al Sharif Group and the
            Government of Queensland, Australia.
        </p>

        <h2 className={headerStyle}>CHALLENGE</h2>
        <p>
            Every day, parents drive to the school to pick up their children. A sticker is needed to
            prove that a person is a guardian of an AIS student. The sticker includes the family
            code (a four-digit number) and the house colour (green, yellow, blue, red or white) of
            the student. The problem was that not every guardian had a sticker inside their car.
            <br />
            <br />
            At the entrance, a teacher checked stickers. If a guardian didn't have a sticker, they
            had to ask for the student's name and search for it in a large stack of papers
            containing every student in AIS. With almost 1500 students, finding a specific student
            could be difficult, and carrying the papers in the hot UAE weather was exhausting.
        </p>

        <h2 className={headerStyle}>SOLUTION</h2>
        <p>
            I discussed making the process digital with the school administration so the student
            list could be accessed on the teacher's phone. After approval, I imported approximately
            1500 student records into the programme. This made the system portable and significantly
            easier to find a specific student quickly.
        </p>

        <h2 className={headerStyle}>INTERFACE</h2>
        <p>
            To search for a student, you select the first letter of the first name, the first letter
            of the last name, the grade, and the gender. Extra features included searching by house
            colour or by typing the 4-digit family code.
        </p>

        <h2 className={headerStyle}>BENEFIT</h2>
        <p>
            Digitising the process removed the need to carry and search through a huge stack of
            papers, and was vastly more efficient. Guardians could pass through quicker, and the
            overall pickup process became faster and easier, reducing traffic considerably. The
            school administration furthermore contacted me the following academic year to update the
            records on the application.
        </p>
    </>
);

export const shababeekLearnMore = (
    <>
        <h2 className="font-bold">ABOUT</h2>
        <p>
            Shababeek is a beloved Lebanese restaurant, creating a true culinary destination for the
            city in collaboration with owner HH Sheikha Bodour bint Sultan Al Qasimi and celebrity
            chef Maroun Chedid.
        </p>

        <h2 className={headerStyle}>CHALLENGE</h2>
        <p>
            The restaurant relied on traditional printed menus which were not very engaging for
            customers. There were few pictures, and paper menus were not ideal for displaying
            additional information. Additionally, whenever an item was added or removed, menus had
            to be discarded and reprinted.
        </p>

        <h2 className={headerStyle}>SOLUTION</h2>
        <p>
            I proposed creating an electronic menu on an iPad. After showing a prototype with sample
            items, they arranged a meeting with the manager. She approved the e-menu and provided
            fonts and later the complete list of items (names, prices, and descriptions) in both
            English and Arabic. I created a record for each item, categorised them, and installed
            the final version on three iPads.
        </p>

        <h2 className={headerStyle}>INTERFACE</h2>
        <p>
            The menu includes nine food categories that can be selected to change pages. Each item
            displays its name, price, picture, and logo. Selecting a food item opens a detail view
            with a larger picture and more information.
        </p>

        <h2 className={headerStyle}>BENEFIT</h2>
        <p>
            The e-menu replaced a bland printed menu that constantly needed reprinting. Updating the
            programme was much easier than printing new menus, reduced operational overhead, and
            saved paper—making the solution completely green.
        </p>
    </>
);

export const rawiLearnMore = (
    <>
        <h2 className="font-bold">ABOUT</h2>
        <p>
            Al Rawi is a hub for the Emirate's creative community, featuring a cafe, restaurant,
            bookstore, events space, and a creative zone for children. It's also an extension of
            Sheikha Bodour&apos;s publishing company and contributes to Sharjah's literature
            festival.
        </p>

        <h2 className={headerStyle}>CHALLENGE</h2>
        <p>
            I was contacted by Sheikha Bodour's management company, Tetra, to work on this new
            project and evaluate how I could add value to this creative hub in Sharjah.
        </p>

        <h2 className={headerStyle}>SOLUTION</h2>
        <p>
            Building on the Shababeek digital menu I had developed earlier, I created a new design
            using Al Rawi's official theme colours, fonts, and images. I imported all food and drink
            items and their pictures, manually cropping each image into a square to keep the menu
            presentable.
            <br />
            <br />
            Later, I added a books menu section. After they liked the idea, we collected ISBNs for
            every English book. To make it fast, I created a script that retrieved book information
            from the ISBN. In the end, the catalogue included about 200 books.
        </p>

        <h2 className={headerStyle}>INTERFACE</h2>
        <p>
            The food menu was similar to Shababeek, but food and coffee used two different layouts.
            Switching between them was done by clicking the logo, and the staff liked the smooth
            transition.
            <br />
            <br />
            The books menu includes nine genres to navigate between pages. Each book shows name,
            price, picture, and logo; selecting a book opens a detail view with a description.
            Preferences can be changed by clicking the logo, which shows all genres and asks for an
            age group for better results.
        </p>

        <h2 className={headerStyle}>BENEFIT</h2>
        <p>
            The e-menu reduced paper wastage and also supported the book-selling business by making
            it easy for customers to browse and find books that match their interests.
        </p>
    </>
);

export const dkLearnMore = (
    <>
        <h2 className="font-bold">ABOUT</h2>
        <p>
            Docker-Kotlin is a Software Development Kit made for Kotlin, with the aim of simplifying
            interactions with the Docker Engine. The SDK uses auto generation tools for creating
            boilerplate code to cover basic endpoints in build time, and also provides an extensive
            feedback system by providing an extensive range of exceptions for the user. It takes
            advantage of some Kotlin features like coroutines and named arguments to provide a fast
            and simple library.
        </p>

        <h2 className={headerStyle}>CHALLENGE</h2>
        <p>
            Our client, Digital Lab, was previously using a different SDK by the name of{" "}
            <a
                href="https://github.com/docker-java/docker-java"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
            >
                docker-java
            </a>
            , however they frequently came across issues with this SDK. Some of those issues arised
            from them using a Java library in their predominantly Kotlin projects. They asked us to
            build a similar SDK, but built in Kotlin, which aims to resolve the issues faced with
            with docker-java.
            <br />
            <br />
            Alongside writing code, tests, and documentation, as part of the university course we
            also had to write two documents detailing the requirements and going through our system
            design.
        </p>

        <h2 className={headerStyle}>SOLUTION</h2>
        <p>
            As a team of 4, we split tasks appropriately and followed a test-driven approach in
            development. I took on the responsibility of being team lead, assigning tasks and
            delegating responsibilities to my team. I ensured that while some of us were working on
            the architecture and code, there would also be someone keeping our documents up to date.
            <br />
            <br />I personally spent a considerable amount of time researching how best to design
            the system. There were various approaches, however I took care to see what docker-java
            did right and what they didn't execute as well. One aspect of our system I was
            particularly proud of was our use of{" "}
            <a
                href="https://github.com/OpenAPITools/openapi-generator"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
            >
                openapi-generator
            </a>{" "}
            to auto-generate a lot of the repetitive code, as the Docker API we were building the
            SDK for was quite large.
            <br />
            <br />
            Overall we successfully covered the most commonly utilized endpoints, allowed for
            asynchronous code execution, implemented desirable design patterns, detailed
            documentation, and descriptive exception throwing. There was a lot to this project, more
            of the details can be seen in the presentation we made for the course.
        </p>

        <h2 className={headerStyle}>USAGE</h2>
        <p>
            The SDK is used by importing the library, providing the URL to the docker engine, and
            calling the desired commands to interact with the Docker daemon (
            <a
                href="/docker-kotlin/example.png"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
            >
                EXAMPLE
            </a>
            ). All function usage leverages Kotlin's named arguments, a feature unavailable in Java,
            to pass only specific values while leaving the others to take on the default value,
            which we have defined for every endpoints' arguments.
            <br />
            <br />
            We made sure that using the library was highly intuitive and simple, while still
            corresponding to the Docker API. Thus, it should be self-evident what each function does
            to a developer experienced with the Docker API.
            <br />
            <br />
            Some of the features supported: creating/modifying containers and images, file upload
            including .tar archives, HTTP connection hijacking to directly talk to the docker daemon
            through stdin with output from stdout, asynchronous manipulation of docker daemon, an
            extensive exception system propagating from the Docker daemon.
            <br />
            <br />
            When any erros are faced with the Docker daemon, from as simple to a disconnection,
            object not found, bad request, to as detailed as specifying that a container is stopped,
            name conflict, etc. Exceptions are also organized in a neat heirarchy and are mapped to
            respective HTTP error codes. In total around 50 exceptions were made to provide precise
            error handling to the developer.
        </p>
        <h2 className={headerStyle}>BENEFIT</h2>
        <p>
            The e-menu reduced paper wastage and also supported the book-selling business by making
            it easy for customers to browse and find books that match their interests.
        </p>
    </>
);
