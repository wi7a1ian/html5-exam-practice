self.onmessage = function (e) { // 'onmessage' needs to be lowercase!
    var message = e.data.SecretMessage;
    console.log("Working with word: " + message);
    this.postMessage(message + ' was processed!');

    close();
}
