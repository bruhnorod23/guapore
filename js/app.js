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
      formObject["recoverFornecedor"] = document.querySelector("#recoverFornecedor").placeholder;
      formObject["recoverVendedor"] = document.querySelector("#recoverVendedor").placeholder;
      formObject["recoverTaxas"] = document.querySelector("#recoverTaxas").placeholder;
      formObject["mcc"] = document.querySelector("#mcc").placeholder;
      formObject["qtdMaquininha"] = document.querySelector("#qtdMaquininha").placeholder;
      formObject["recoverCadunico"] = document.querySelector("#recoverCadunico").placeholder;
      formObject["recoverFaturamento"] = document.querySelector("#recoverFaturamento").placeholder;
      formObject["recoverRazao"] = document.querySelector("#recoverRazao").placeholder;
      formObject["recoverFantasia"] = document.querySelector("#recoverFantasia").placeholder;
      formObject["recoverEmail"] = document.querySelector("#recoverEmail").placeholder;
      formObject["recoverTipoContato"] = document.querySelector("#recoverTipoContato").placeholder;
      formObject["recoverCpfcontato"] = document.querySelector("#recoverCpfcontato").placeholder;
      formObject["recoverNomeContato"] = document.querySelector("#recoverNomeContato").placeholder;
      formObject["recoverTelContato"] = document.querySelector("#recoverTelContato").placeholder;
      formObject["recoverCelContato"] = document.querySelector("#recoverCelContato").placeholder;
      formObject["recoverEmailContato"] = document.querySelector("#recoverEmailContato").placeholder;
      formObject["recoverBanco"] = document.querySelector("#recoverBanco").placeholder;
      formObject["recoverTipoConta"] = document.querySelector("#recoverTipoConta").placeholder;
      formObject["recoverNroAgencia"] = document.querySelector("#recoverNroAgencia").placeholder;
      formObject["recoverDigitoAgencia"] = document.querySelector("#recoverDigitoAgencia").placeholder;
      formObject["recoverNroConta"] = document.querySelector("#recoverNroConta").placeholder;
      formObject["recoverDigitoConta"] = document.querySelector("#recoverDigitoConta").placeholder;
      formObject["recoverCep"] = document.querySelector("#recoverCep").placeholder;
      formObject["recoverEstado"] = document.querySelector("#recoverEstado").placeholder;
      formObject["recoverCidade"] = document.querySelector("#recoverCidade").placeholder;
      formObject["recoverLogradouro"] = document.querySelector("#recoverLogradouro").placeholder;
      formObject["recoverBairro"] = document.querySelector("#recoverBairro").placeholder;
      formObject["recoverReceptor"] = document.querySelector("#recoverReceptor").placeholder;
      formObject["recoverCelReceptor"] = document.querySelector("#recoverCelReceptor").placeholder;
      formObject["recoverEmailReceptor"] = document.querySelector("#recoverEmailReceptor").placeholder;
    
      return formObject;
    }
    
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
      $('#sendingMessage').text('Estamos enviando as informações, aguarde um momento.');
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
      } finally { 
        // Atualiza a mensagem após o envio 
        $('#sendingMessage').text('Informações enviadas, obrigado por aguardar :)');
        $('#titleSendingMessage').text('Tudo certo!'); 
        $('#returnButton').show(); // Mostra o botão para retornar à página principal 
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
  