export default function usePassword() {
  const password = ref("");
  const passwordStrength = ref("");
  const progressClass = ref("");
  const progressWidth = ref("0%");

  const checkPasswordStrength = () => {
    const validators = [
      validateLength,
      validateLowerCase,
      validateUpperCase,
      validateNumbers,
      validateSpecialChars,
    ];

    const strength = validators.reduce((acc, validator) => acc + validator(password.value), 0);
    updatePasswordStrength(strength * 20);
  };

  const validateLength = (value: string) => (value.length >= 8 ? 1 : 0);
  const validateLowerCase = (value: string) => (value.match(/[a-z]/) ? 1 : 0);
  const validateUpperCase = (value: string) => (value.match(/[A-Z]/) ? 1 : 0);
  const validateNumbers = (value: string) => (value.match(/[0-9]/) ? 1 : 0);
  const validateSpecialChars = (value: string) => (value.match(/[!@#$%^&*()_+{}|:<>?]/) ? 1 : 0);

  const updatePasswordStrength = (strength: number) => {
    if (password.value.length === 0) {
      resetPasswordStrength();
      return;
    }

    if (strength <= 40) {
      passwordStrength.value = "Weak";
      progressClass.value = "bg-danger";
    } else if (strength <= 80) {
      passwordStrength.value = "Medium";
      progressClass.value = "bg-warning";
    } else {
      passwordStrength.value = "Strong";
      progressClass.value = "bg-success";
    }

    progressWidth.value = `${strength}%`;
  };

  const resetPasswordStrength = () => {
    passwordStrength.value = "";
    progressClass.value = "";
    progressWidth.value = "0%";
  };

  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById("password");
    const passwordEyeIcon = document.getElementById("password-eye-icon");

    if (passwordField) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else if (passwordField.type === "text") {
        passwordField.type = "password";
      }
    }

    if (passwordEyeIcon) {
      passwordEyeIcon.classList.toggle('bi-eye');
      passwordEyeIcon.classList.toggle('bi-eye-slash');
    }
  }

  return {
    password,
    passwordStrength,
    progressClass,
    progressWidth,
    checkPasswordStrength,
    togglePasswordVisibility
  };
}
