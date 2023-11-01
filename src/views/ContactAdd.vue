<template>
    <div>
      <ContactForm :contact="contactData" 
      @submit:contact="addContact"
      />
      <h1></h1>
    </div>
</template>
  
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contactData: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
    };
  },
  methods:{
      async addContact(data) {
      try {
          await ContactService.create(data)
          confirm('Đã thêm liên hệ mới')
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
