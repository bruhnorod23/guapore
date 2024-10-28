class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
    
      // Recupera manualmente os valores dos campos
      formObject["recoverFornecedor"] = document.querySelector("#recoverFornecedor").value;
      formObject["recoverVendedor"] = document.querySelector("#recoverVendedor").value;
      formObject["recoverTaxas"] = document.querySelector("#recoverTaxas").value;
      formObject["mcc"] = document.querySelector("#mcc").value;
      formObject["qtdMaquininha"] = document.querySelector("#qtdMaquininha").value;
      formObject["recoverCadunico"] = document.querySelector("#recoverCadunico").value;
      formObject["recoverFaturamento"] = document.querySelector("#recoverFaturamento").value;
      formObject["recoverRazao"] = document.querySelector("#recoverRazao").value;
      formObject["recoverFantasia"] = document.querySelector("#recoverFantasia").value;
      formObject["recoverEmail"] = document.querySelector("#recoverEmail").value;
      formObject["recoverTipoContato"] = document.querySelector("#recoverTipoContato").value;
      
    
      return formObject;
    }
    
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) document.getElementById("nextBtnFinal").addEventListener("click", this.sendForm);

      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();
  