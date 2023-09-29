export const signupInputs = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    after: true,
    validation: {
      required: {
        value: true,
        message: "First Name is required.",
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/g,
        message: "First Name must not contain special character or number",
      },
    },
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    after: true,
    placeholder: "Last Name",
    validation: {
      required: {
        value: true,
        message: "Last Name is required.",
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/g,
        message: "Last Name must not contain special character or number",
      },
    },
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Email",
    validation: {
      required: {
        value: true,
        message: "Email is requred.",
      },
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
        message: "Please enter valid email address.",
      },
    },
  },
];
