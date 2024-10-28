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
      formObject["recoverCpfcontato"] = document.querySelector("#recoverCpfcontato").value;
      formObject["recoverNomeContato"] = document.querySelector("#recoverNomeContato").value;
      formObject["recoverTelContato"] = document.querySelector("#recoverTelContato").value;
      formObject["recoverCelContato"] = document.querySelector("#recoverCelContato").value;
      formObject["recoverEmailContato"] = document.querySelector("#recoverEmailContato").value;
      formObject["recoverBanco"] = document.querySelector("#recoverBanco").value;
      formObject["recoverTipoConta"] = document.querySelector("#recoverTipoConta").value;
      formObject["recoverNroAgencia"] = document.querySelector("#recoverNroAgencia").value;
      formObject["recoverDigitoAgencia"] = document.querySelector("#recoverDigitoAgencia").value;
      formObject["recoverNroConta"] = document.querySelector("#recoverNroConta").value;
      formObject["recoverDigitoConta"] = document.querySelector("#recoverDigitoConta").value;
      formObject["recoverCep"] = document.querySelector("#recoverCep").value;
      formObject["recoverEstado"] = document.querySelector("#recoverEstado").value;
      formObject["recoverCidade"] = document.querySelector("#recoverCidade").value;
      formObject["recoverLogradouro"] = document.querySelector("#recoverLogradouro").value;
      formObject["recoverBairro"] = document.querySelector("#recoverBairro").value;
      formObject["recoverReceptor"] = document.querySelector("#recoverReceptor").value;
      formObject["recoverCelReceptor"] = document.querySelector("#recoverCelReceptor").value;
      formObject["recoverEmailReceptor"] = document.querySelector("#recoverEmailReceptor").value;
    
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
  