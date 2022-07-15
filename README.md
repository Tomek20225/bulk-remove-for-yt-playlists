# Bulk remove videos from any YouTube playlist
**Last update: 2022-07-15**

A script written in JavaScript. Includes basic filtering functionality based on channel names.

![The script in action](https://pasteboard.co/xuG76hb5KbXy.png)



## How to use it?

1. Open any YouTube playlist in your browser (i.e. the URL should be strucutred like this: *https://www.youtube.com/playlist?list=YOUR_LIST_ID*.
2. Scroll down on the playlist as far as you can. Ideally by the end of scrolling you'd have loaded all of the videos from your playlist into the view.
2. Open the browser's Dev Tools.
3. Paste the contents of `script.js` file in the Console of the Dev Tools.
4. Fill in the blanks spaces in the script *optional*:
    1. Set the amount of videos skipped from top of the list - change the value of `skipVideoAmount` constant.
    2. Specify the channel names which you'd want to skip from deletion - fill in the string elements of `authors` constant array.
5. Run the script.
6. Wait.
7. ...
8. Profit



## How does it work?

The script automatically finds all of the elements representing videos in a playlist. Then, for each of the elements, it performs an action consisting of these steps:
1. Scroll to the video intended for deletion.
2. Find and click on the 3 dots representing the popup menu.
3. Find and click on the 3rd button in a row within the popup menu (the *Remove video from playlist* button).

After performing these steps, the remove request is sent to YouTube. Each of these steps is necessary, since the request data is gathered based on user's recent clicks.

Each action is set one second after the other, in order not to spam YouTube with requests and risk failing or being (possibly) flagged as a bot.



## Can I contribute?

Yes, of course! Any help is welcome.

This project was originally made purely for the fun of creating it and to remove the unwanted videos from my personal playlist quickly. I thought it might be helpful to others.

I'm not sure whether I'll contribute to this project more personally, since I've achieved my goal, but if you are interested, then I believe you may want to look into these issues:

- [ ] Find out why there is always an error when removing the first video from the playlist
- [ ] Check whether the 1 second timeout between removal of each video is not overkill
- [ ] Check whether popup element has to be fetched from the DOM for each video, or if it can be fetched once
- [ ] Create two author filtering modes: for deleting the given channels of for skipping them
- [ ] Check whether elements can be fetched more efficiently from the DOM rather than by chaining the fetches
- [ ] Write code to handle errors properly
- [ ] Add filtering based on video names
- [ ] Add filtering based on video watch progress
- [ ] Change the code layout from multiple functions to one loop or to OOP (?)

If you are in a position similar to mine or you simply feel you could help in pushing the project further, then feel free to give a hand! And remember - have fun!



Thanks for stopping by! **Have a nice day and good luck! :heartpulse::sparkles:**

Please let me know what you think about the code! It helps a lot!
