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
    
      const fields = [
        "recoverFornecedor",
        "recoverVendedor",
        "recoverTaxas",
        "mcc",
        "qtdMaquininha",
        "recoverCadunico",
        "recoverFaturamento",
        "recoverRazao",
        "recoverFantasia",
        "recoverEmail",
        "recoverTipoContato",
        "recoverCpfcontato",
        "recoverNomeContato",
        "recoverTelContato",
        "recoverCelContato",
        "recoverEmailContato",
        "recoverBanco",
        "recoverTipoConta",
        "recoverNroAgencia",
        "recoverDigitoAgencia",
        "recoverNroConta",
        "recoverDigitoConta",
        "recoverCep",
        "recoverEstado",
        "recoverCidade",
        "recoverLogradouro",
        "recoverBairro",
        "recoverReceptor",
        "recoverCelReceptor",
        "recoverEmailReceptor"
      ];
    
      fields.forEach((fieldId) => {
        const field = document.querySelector(`#${fieldId}`);
        if (field) {
          formObject[fieldId] = field.value;
        }
      });
    
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
  