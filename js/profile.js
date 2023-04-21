const textArea = document.querySelector('.other_profiles_textarea');
const textareavalue = textArea.value.length;
const spanNumber = document.querySelector('.about_input_span_value');

textArea.onchange = function () {
  spanNumber.innerHTML = this.value.length; 
};
