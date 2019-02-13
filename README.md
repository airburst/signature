# Signature

A simple React client app to demonstrate capturing and storing a handwritten signature.

The main Signature component renders a box to capture the signature, drawn with mouse or finger on a touch-sensitive screen, along with buttons to save or clear the signature.

It accepts the following props:

* saveAction (required function). A function to call a back end service and store the image dataUrl.
* noSignatureAction: A function that is invoked when the save button is clicked, but no signature has been drawn
* height (Number): height of signature box in px. (Width is 100% of container)
* signButtonText: Text on the 'sign' button
* clearButtonText: Text on the 'clear' button