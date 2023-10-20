import { required, minLength, maxLength } from "@vuelidate/validators";

const productRules = {
  title: { required, minLength: minLength(4), maxLength: maxLength(20) },
  status: { required },
  type: { required },
  specification: { required },
  guarantee: {
    start: { required },
    end: { required },
  },
  order: { required },
  date: { required },
  isProductNew: { required },
  price: [
    {
      value: { required },
    },
    {
      value: { required },
    },
  ],
  serialNumber: { required },
};

export default productRules;
