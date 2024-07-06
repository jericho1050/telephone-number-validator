const get = (element) => document.getElementById(element);


class App {
  constructor() {
    this.render();
    this.input = ''; // this the user's input state;
    this.bindEvents(); // bind event listeners after rendering
  }

  render() {
    get("root").innerHTML = `
        <h1><span>TELEPHONE NUMBER</span> <span>VALIDATOR</span></h1>
        <div class="marvel-device iphone-x">
            <div class="notch">
                <div class="camera"></div>
                <div class="speaker"></div>
            </div>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="bottom-bar"></div>
            <div class="volume"></div>
            <div class="overflow">
                <div class="shadow shadow--tr"></div>
                <div class="shadow shadow--tl"></div>
                <div class="shadow shadow--br"></div>
                <div class="shadow shadow--bl"></div>
            </div>
            <div class="inner-shadow"></div>
            <div class="screen">
                <!-- Content goes here -->
                <div class="container">
                    <div class="wrapper">
                        <h2>
                            Enter a Phone Number
                        </h2>
                        <input id="user-input">
                        <div id="results-div"></div>
                    </div>
                    <div class="cta-wrapper">
                        <button type="button" id="check-btn">Check</button>
                        <button type="button" id="clear-btn">Clear</button>
                    </div>
                </div>

            </div>
        </div>
        `;

  }
  bindEvents() {
    get("check-btn").addEventListener("click", () => this.handleCheck());
    get("clear-btn").addEventListener("click", () => this.handleClear());
    get("user-input").addEventListener("input", (e) => this.handleInput(e));
  }

  handleInput(e){
    this.input = e.target.value;
  }

  handleCheck() {
    const isValid = this.validatePhoneNumber(this.input);
    this.updateResults(isValid);
  }
  
  handleClear() {
    this.input = ''; // clear state
    get('user-input').value = ''; // clear the element's input field
    get('results-div').innerHTML = '';
    this.updateResults('');
  }

  validatePhoneNumber(input) {
    if (!input) {
      alert('Please provide a phone number');
      return false; // Immediately exit if no input is provided
    } else {
      // Updated regex to match valid US phone number formats
      let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
      return regex.test(input);
    }
  }

  updateResults(isValid) {
    const resultsDiv = get('results-div');
    if (isValid === '') {
      resultsDiv.innerHTML = ''; // Clear the results div without displaying any message
    } else {
      resultsDiv.innerHTML = isValid ? `Valid US number: ${this.input}` : `Invalid US number: ${this.input}`;
    }
  }

}

new App();
