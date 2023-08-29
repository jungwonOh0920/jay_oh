# Jay Oh - Tab Navigation

Hi, there. 👋 My name is Jay Oh and I'm glad to present my humble work to you today. 

## How to run the project
1. On this page(https://github.com/jungwonOh0920/jay_oh), 
2. Click the green `< >Code` button and click `Download ZIP`.
3. After download it, open it with a code editor like Visual Studio Code. 
4. If you don't have one, you can get VSCode here (https://code.visualstudio.com/)
5. Then, go to terminal (or on VSCode, press `control` and `~` to open the terminal tab). Make sure you are on the right directory. 
6. Install NPM packages
   ```sh
   npm install
   ``` 
7. Run the project by typing the following and you will be able see it on localhost:3000
   ```sh
   npm run start
   ```


## About the project

### Design
There are 5 section tabs on the left and contents changes accordingly. Default section is Section 4 which is the Mario content. 

Desktop:
![Product Desktop][product-desktop]

For the content section on desktop screen, those two buttons at the bottom are aligned with other contents unlike the original design. 

I have added the mobile version. When the screen size is small enough(less than 720px), the `hamburger menu bars` appear on the top right as the section titles are hidden. When it's clicked, the section titles appear from the left side. It collapes back when a section is clicked. 

When hover the buttons, it expands a little bit to notify users just like the nintendo website. 😉

Mobile Content Section:<br />
![Product mobile1][product-mobile1]

Mobile Section Title Section: <br />
![Product mobile2][product-mobile2]
 

### Development

#### Libraries I utilized
1. `Classnames`
<br />Classnames is a simple JavaScript utility for conditionally joining classNames together so that it helps for better readability. 
Ex) I'm using it in my `Tabs` component:
![Product tabs][product-tabs]
<br />Documentation: https://github.com/JedWatson/classnames#readme

2. `React-icons`
<br />It contains popular icons and they can be used like components.
Ex) I'm using some icons in my `searchInput` component and `Hamburger Menu` 
<br />Documentation: https://github.com/react-icons/react-icons#readme

#### Custom Components
1. `Article`
<br />`Article` component takes text as children and it is wrapped by `<p>` tag. This component can be useful when text is too long. It has `Read More` button that enables to do ellipsis text when it has more than 2 lines. 

2. `Button`
<br />There could be many different types of buttons. For example, a button with outline, a button with background color, or just underlined text as a button. Depending on the props of the component, we can have different buttons.

3. `SearchInput`
<br />It's a search input with an icon on the left and select option on the right.

4. `Tabs`
<br /> It takes `active tab index` and `isMobile` as props. App component is its parent component and it should know if it is mobile size or not. The `active` prop decides which tab is initially active. In this case, section 4 is selected as a default. 
<br /> The children components are expected to be wrapped by `TabPane` so that this component can handle both section titles and bodies.
<br />Ex) `Tabs` component: <br />
![Product tabs-usage][product-tabs-usage]

5. `SectionContents`
<br />There is Mario content component that is a combination of text, image, and other components. Other content components are also filled with some placeholders and I added inline styling since it's just placeholders. 

#### Comments
First of all, I learned so much as I did this. It took me longer than I thought first. I learned 
* it's important to have proper HTML element structure before styling. Took me so long to fix styling after I changed HTML structure 🥹
* Typescript could've been better for prop types or any other data types because it can be messed up easily without declaring datatypes explicitly. 
* Something new - Component Composition with Dot Notation Exports. I've seen it before like StyledComponent but never created one yet. I guess I didn't have to build `Tabs` component in this way, but I wanted to try it and it worked! 😁
* Style guide is needed. When I though about responsiveness for this, I was lost. I used the hamburger menu, but I'm pretty sure there would be a better way to do it. So, for better user experience, it's important to work with UI/UX designers.

Thank you very much for your time and hope I hear back from ya! 🤙

[product-desktop]: src/assets/images/desktop.png
[product-mobile1]: src/assets/images/mobile1.png
[product-mobile2]: src/assets/images/mobile2.png
[product-tabs]: src/assets/images/tabs.png
[product-tabs-usage]: src/assets/images/tabsUsage.png