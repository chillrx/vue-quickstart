export default {
  data() {
    return {
      rules: {
        required: v => !!v || "Required field"
      }
    };
  }
};
