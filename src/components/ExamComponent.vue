<template>
    <div id="contact">
        <form @submit.prevent="contact" class="contact-form">
            <div class="container">
                <h1>Your Details</h1>
                <section class="form clearfix">
                    <div class="form-group half mobile-half">
                        <label for="first-name">First Name</label>
                        <input type="text" name="first-name" id="input" v-model="firstname" v-validate="'required|alpha'" placeholder="EG. Karl" required/>
                    </div>

                    <div class="form-group half mobile-half">
                        <label for="last-name">Last Name</label>
                        <input type="text" name="last-name" id="input" v-model="lastname" v-validate="'required|alpha'" placeholder="EG. Benz" required/>
                    </div>

                    <div class="form-group two-fifths">
                        <label for="company">Company Name</label>
                        <input type="text" name="company" id="input" v-model="company" placeholder="EG. Mercedes-Benz" required/>
                    </div>

                    <div class="form-group three-fifths">
                        <label for="email">Company Email</label>
                        <input type="email" name="email" id="input" v-model="email" v-validate="'required|email'" placeholder="EG. karl.benz@mercedes-benz.co.uk" required/>
                    </div>
                
                    <div class="form-group half">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone" id="input" v-model="phone" v-validate="'required|numeric'" placeholder="XXXXX XXX XXX" required/>
                    </div>

                    <div class="form-group half anonimise">
                        <label for="anonimise">Anonimise your review?</label>
                        <p>Make my review anonymous</p>
                        <input type="checkbox" name="anonimise" id="checkbox" class="checkbox" v-model="checked" required/>
                    </div>
                </section>
            </div>
            <section class="footer">
                <div class="page-number">
                    <p>1/4</p>
                </div>
                
                <div class="page">
                    <a href="#" class="desktop">Back</a>
                    <a href="#" class="mobile">Cancel</a>
                    <input type="submit" class="btn" value="Next Questions">
                </div>
            </section>
        </form>
    </div>
</template>

<script>
export default {
    name: "ExamComponent",
        data: () => ({
            firstname: '',
            lastname: '',
            company: '',
            email: '',
            phone: '',
            checked: 'false',
        }),
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Form Submitted!');
                        return;
                    }

                    alert('Correct them errors!');
                });
            }
        }
    };

</script>

<style scoped lang="scss">
    #contact {
        background: #ffffff;
        border-top: 5px solid #6999B8;
        margin: 0 auto;
        box-shadow: 0px 0px 5px 0px rgba(105,153,184,1);
        border-radius: 4px;
        letter-spacing: .5px;
    }

    .container {
        padding: 1em 20%;
    }

    h1 {
        color: #000000;
        font-weight: 900;
    }

    .form {
        padding-bottom: 5em;
        color: #808080;
    }

    .form-group {
        float: left;
        margin: 1em 0;
    }

      label {
        text-transform: uppercase;
        display: block;
        font-size: .9em;
        margin-bottom: .5em;
    }

    input {
        border: none;
        cursor: pointer;
        color: #808080;
        border-bottom: 1px solid #808080;
        display: block;
        width: 90%;
        margin-right: 1em;
        font-size: 1.4em;
    }

    input:hover {
        background:#f9f9f9;
    }

    .half {
        width: 50%;
    }

    .two-fifths {
        width: 40%;
    }

    .three-fifths {
        width: 60%;
    }
    
    .anonimise p {
        margin: 0;
        border-bottom: 1px solid #808080;
        width: 90%;
        display: inline;
        font-size: 1.4em;
        color: #000000;
        line-height: 1.5;
    }
    
    .checkbox {
        display: inline;
        width: 20px;
        margin-left: 5px;
    }

    .footer {
        background: #f9f9f9;
        color: #808080;;
        clear: both;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        font-size: 1em;
    }

    .page-number p, .page {
        display: inline;
        display: flex;
        align-items: center;
    }

    .footer a {
        text-decoration: none;
        color: #808080;
    }

     .footer a:hover {
        color: #000000;
     }

     .mobile {
         display: none;
     }

    .btn {
        display: inline;
        padding: 1em;
        margin: 0 10px;
        border: 1px solid #808080;
        border-radius: 5px;
        font-size: 1em;
    }

    .btn:hover, {
        border: 1px solid #000000;
        color: #000000;
    }

/* MEDIA QUERIES */
@media (max-width: 780px) {
    .container {
        padding: 1em 2em;
    }

    .form {
        clear: both;
    }

    .form-group {
        float: none;
        margin: 1em 0;
    }

    .half {
        width: 100%;
    }

    .mobile-half { 
        float: left;
        width: 50%;
    }

    .two-fifths {
        width: 100%;
    }

    .three-fifths {
        width: 100%;
    }

    .desktop {
        display: none;
    }

    .mobile {
        display: inline;
    }
}
</style>
