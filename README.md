# nulaprocenta
nulaprocenta.com new website to substitute the Flash version

## Links
- static page https://nhristova.github.io/nulaprocenta/
- current page http://nulaprocenta.com/

## Work plan
1. Flash site to HTML5
    - [ ] Static pages
    - [ ] Painter
    - [ ] Ordering by email
2. Store (payment on delivery only)
    - [ ] Shopping cart
    - [ ] Registration
    - [ ] Database to store orders
3. Payment options - bank transfer, online card payment
4. Content management functionalities
    - [ ] Load lists from database - models, gallery, blog
    - [ ] Add/edit model
    - [ ] Add/edit posts
    - [ ] Add/edit gallery

## Requirements
1. Pages list (public) - see concept_c.pdf
    - Models (pre-defined per season) / default page
    - Configurator / custom model
    - Gallery
    - Blog
    - Q&A
    - Contacts
    - About us
    - Shopping cart
1. Painter SVG section
    - Create painting functionality
        - hat loads with a certain design 
        - the user can modify the colors - when hovering over a stripe - a popup colour dial appears (centred on the cursor) - clicking a colour changes the hovered stripe color
        - add remove elements - pompom, ear flaps
    - When edit completed - a hat object is created/sent to cart and a screen-shot of the hat - price is calculated based on the hat object properties
3.  Admin page 
    - Add new model
    - Add new post to blog
    - Add new item in gallery
    - Orders list
4. Database 
    - users 
    - hat models 
    - orders
    - posts
    - gallery 

    ```json
    // hat model properties
    {
        model: string, // Yoda, Thermos, custom
        size: enum, // xs, s, m, l, xl
        length: enum, // dependant on size - 21cm (to base of ear), 
        shape: enum, // round, triangular
        pompoms: number,
        lining: boolean,
        thickness: number, // 1, 2, 3 
        material: string // wool, cotton
    }
    ```

## Routes
- /models - default (home)
- /models/:modelId
- /painter
- /gallery
- /gallery/:galleryItemId
- /blog
- /blog/:blogItemId
- /q&a
- /contacts
- /about

## Tech
- Progressive web app
    - [ ] manifest file
    - [ ] cache resources with service worker - pages html, css, images
- TypeScript?
- React?
- CI / CD - Netlify?
- Unit tests
- Database - firebase or GraphQL?
