# startup
Here are some edits from VS Code
Here are some edits from GitHub
Here is a merge of both edits

#Notes
I learned tons from this assignment. I think I had originally made some kind of mistake while cloning the repository and it was pretty stressful. However, after some stress, I finally figured it out. I am feeling a lot more confident using the terminal on VS Code as well as using GitHub and communicating between the two. One of the most important things I learned was the importance of making sure I was in the right directory.

Elevator pitch: 
Have you ever played the Oregon Trail game that was released back in the 70’s? Maybe you've read a Choose Your Own Adventure book as a kid. Our new app is designed to bring back the fun and nostalgia of a simple game where you can affect the outcome by making choices. Eventually, we hope to have a variety of themes to choose from, but right now we are focusing on a mission to space. This app will allow you to make an account, choose your path through a series of exciting scenes, and see how you compare to other players that day.

[Screenflow](https://github.com/asiahaslam/startup/files/10526008/Screenflow.Diagram.Flowchart.Whiteboard.in.Pink.Yellow.Adjacent.Color.Blocks.Style.pdf)

HTML and CSS:
I learned tons about how to use Bootstrap while making this simple application. I have never used Bootstrap before, so it was a good learning experience. I found an online tool where I could change the color scheme in Bootstrap to make it a bit more like space.

JavaScript:
I struggled figuring out how to update every instance of the name on a page, because it would only update the first one. I spent a lot of time trying to look up a solution, and finally figured out I had to use a kind of loop to get it to insert the name every time I had an element with the "user" class.

Service:
Adding the express service was pretty easy because I just added a random quote like in Simon. The login was pretty rough. I still don't know what the issue was, but copying the backend directly from simon, besides changing one link, and using the same exact public file finally allowed me to deploy my application. I had to get a lot of help from a TA figuring out the websocket issue. I had gotten help from ChatGPT which was mostly helpful, but it was supposed to be event.data.text instead of data.text.event, and in another place it was supposed to be msg.from instead of msg.something else and msg.value.playerName to get the player's name in the message. The TA also helped me know where to place console logs to see where the issue was.