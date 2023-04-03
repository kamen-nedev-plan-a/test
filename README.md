## After implmenetation feedback

### Did you encounter any issues during the implementation ? If so, were you able to bypassthem?

Yes, I've never used `setInterval` with hooks (or at least don't remember doing it), so I was surprised that it didn't worked as I expected. Decided to research and stumbled upon this great in-depth article, explaining why it happens and a workaround. I based my `useInterval` hook on the explanation here - https://overreacted.io/making-setinterval-declarative-with-react-hooks/

### Looking closely at the response of the API, do you think there is another way to implement the app ? If yes, what other option could exist ? If no, why not ?

1. Instead of passing the API_KEY as query parameter, we can set it in headers.
2. Could be better to get users by id instead of username. Otherwise we should be sure that this username will be unique, and after someone deletes their account, we should delete every media related to that user.
3. Having a single request to return all the needed data would be perfect, instead of making 3 different requests.
4. For some reason, I can not limit the request for get posts to only one post. Should be minimum 2.

### If you were in direct contact with the API service team, what could you ask them to do tomake your life easier or optimise the performances ?

As mentioned above, could be just a single request which returns only the needed data.

### What was the most difficult part of the implementation for you and why ?

Setting up the `setInterval` was bit tricky before knowing about the "issue".

## On a scale of 1 to 10, are you satisfied with the result ? Is there anything that needs moreattention ?

7/10 - Tried to fit the implementation withing a time frame without spending enough time to think of all possible solutions and so picking the best one. Also, as can be seen, the errors are not handled well (I didn't had requirements for that, so I improvised there. Simply stopping the loop if there is an error). Another thing is that my implementation conciders always having a good internet connection and speed. If it was a real project and I had more time to do it, I would do something like preloading the next post while we are still seeing the previous one. This way the transitions would be much better. Also depending on the speed of the internet and the device, we can load different sizes of images, which is not implemenetet as well for the same reason.

## How long did it take you to implement this development ? Was it longer or shorter thanwhat you initially expected ?

To be honest, I expected to take no more than 3-4 hours, but it took longer. Haven't tracked exact time, but for 6 days I was spending between 1 and 1.5 hours a day. It was fun though.
