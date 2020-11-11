## Form components

### Description of a form

To create a form, you should use a function call `createForm` from helpers. It take two arguments, the first one is an array of fields definition and the second one is a map of and object that hold the defaults values for your form. Here is an example.

```
const form = createForm([
    {
        name: "email",
        label: "Your email adresse",
        placeholder: "Example@gmail.com",
        type: "text"
    }
],{
    email: "nguekeu3divin@gmail.com
})
```

This the example above, we create a form with one input type `text` that name to here is `email` and the given default value is `nguekeu3divin@gmail.com`.

All native input are supported with the same name. And we add additionnal custom input type. Some of them need backend implementation. We will explain how to use them.

#### Input properties

- name
- label
- placeholder
- small
- options
- validations

#### Custom input type

| type    | Description                                                                           | backend implementation |
| ------- | ------------------------------------------------------------------------------------- | ---------------------- |
| prepend | Text type with some prepand or postpend information                                   | NO                     |
| avatar  | Input for avatar. Just image upload but design as input file field for avatar update. | YES                    |
| file    | Input file. Vue js does'nt supported input out of the box. so we implement it.        | YES                    |

#### Prepend

#### avatar

type avatar

Additionnal attribute

- action : button label
- url: url of the upload handler(for backend implementation)

##### nodejs implementation

```
some code
```

#### file

type file

attribut list:

- action
- label
- conditions
- text
- type
- errors : TYPE_ERROR, STANDARD

##### nodejs implementation

```
some code
```
