# React - Gallery: Reaction Animals

[Project Instructions](./INSTRUCTIONS.md)

## Description

This is my first React app. It is a simple gallery of reaction animals. The user can click on each photo to toggle between the picture and its description. Each image has a "react" button, along with a display of the number of reactions stored on the server. 

This was my first time using conditional formatting and props in React. 

I used two instances of conditional formatting. First, I used a simple !statement to construct the flipImage function, and used conditional formatting to display either the description `<div>` or the `<img>`. Then, I used an if statement in the renderReactions function to branch the logic into:
- No one has reacted to this yet!
- 1 person has reacted to this photo!
- `{Number}` people have reacted to this photo!

Passing props was the most challenging aspect of this project. When it came time to establish the PUT route on the client side, it took a long time and collaboration to figure out not only how to establish the route, but also how to pass the correct ID _and_ handle page defaults. 

If I had more time I would have liked to have attempted some of the stretch goals, but I'm very proud of the work I did on this assignment. 

## Screenshot

[PREVIEW](/public/images/Screenshot.png)

## Built With

- HTML
- CSS
- Javascript
- React

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to the members of the Dahl cohort for support and coworking throughout the project.

## Support
If you have suggestions or issues, please email me at [meirsedlis@gmail.com](mailto:meirsedlis@gmail.com?subject=Reaction%Animals%The%App)