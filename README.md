iframe'd ZeroClipboard proof-of-concept
=================

To run locally, clone this repo, then run make.

Clicking the 'copy' button inside the iframe will pass the content as a message to the parent window, in addition to copying. Received messages are printed under the text areas. The windows also pass 'ready' messages to each other when they load for the first time.

The message-passing is happening in lines 6-11 of demo-traditional.js, and the message-receiving in lines 37-42.
