# Emails Editor ✉️

![CI](https://github.com/aaccurso/emails-editor/workflows/CI/badge.svg)

A simple editor for generating a list of emails.

## Usage

- First install dependencies with `npm install`.
- Build the library with `npm run build`.
- Add the generated script at the bottom of your document body.

```html
<body>
    <!--your app-->
    <script src="dist/main.js"></script>
</body>
```

- Then use global `EmailsEditor` function to create the component.

```html
<body>
    <div id="emails-editor"></div>
    <script src="dist/main.js"></script>
    <script>
        const emailsEditor = EmailsEditor(document.querySelector('#emails-editor'));
    </script>
</body>
```

## Advanced

Pass options as the 2nd parameter of `EmailsEditor` specifying the initial emails to display.

```javascript
const options = {
    emails: [
        {
            value: 'demo@mail.com',
            isValid: true,
        },
    ],
    header: ''
};
const emailsEditor = EmailsEditor(/** container **/, options);
```

To get current emails use the `getEmails` method, accessed through the object returned by `EmailsEditor`.

```javascript
const emailsEditor = EmailsEditor(/** container **/);
const emails = emailsEditor.getEmails();
```

## Demo

You can find a demo of the component at [aaccurso.me/emails-editor](http://aaccurso.me/emails-editor).
