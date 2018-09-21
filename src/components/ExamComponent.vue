<template>
    <div id="contact" class="wrapper">
        <h1>Your Details</h1>
          <form @submit.prevent="contact" class="contact-form">
        <div class="first-name">
            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="input" v-model="firstname" v-validate="'required|alpha'" placeholder="EG. Karl" required/>
            <p class="alert" v-if="errors.has('firstname')">{{ errors.first('firstname') }}</p>
        </div>

         <div>
            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="input" v-model="lastname" v-validate="'required|alpha'" placeholder="EG. Benz" required/>
        </div>

         <div>
            <label for="company">Company Name</label>
            <input type="text" name="company" id="input" v-model="company" placeholder="EG. Mercedes-Benz" required/>
        </div>

         <div>
            <label for="email">Company Email</label>
            <input type="email" name="email" id="input" v-model="email" v-validate="'required|email'" placeholder="EG. karl.benz@mercedes-benz.co.uk" required/>
        </div>

          <div>
            <label for="phone">Phone Number</label>
            <input type="text" name="phone" id="input" v-model="phone" v-validate="'required|numeric'" placeholder="XXXXX XXX XXX" required/>
        </div>

        <div>
            <label for="anonimise">Anonimise your review?</label>
            <input type="checkbox" name="anonimise" id="checkbox" v-model="checked" required/>

        </div>
        
        <a href="">Back</a>
        <input type="submit" class="btn" value="Next Questions">
        </form>
    </div>

  
</template>

<script>
export default {
    name: "ExamComponent",
};

</script>

<style scoped lang="scss">
    #contact {
        margin: 0 auto;
        text-align: left;
    }

    .wrapper {
        margin: 0 auto;
        width: 70%;
    }



    #input {
        display: block;
    }

    input {
        border: none;
        cursor: pointer;
        color: grey;
    border-bottom: 1px solid grey;
    font-weight: bold;
    }

    label {
        text-transform: uppercase;
    }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

</style>
