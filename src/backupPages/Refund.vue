<template>
  <div class="d-flex justify-center px-16" style="padding-top: 40px">
    <div style="max-width: 1296px; width: 100%">
      <h1>Refund Policy</h1>
      <br />
      <div v-for="(item, index) in arr" :key="index">
        <h3>{{ index + 1 }}. {{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr = [
  {
    title: "Refund Conditions",
    content:
      "Due to the subscription-based and instant points usage nature of our services, we generally do not offer refunds. However, if a user has not used any points within 30 days of purchase, we may consider a full refund request at our discretion.",
  },
  {
    title: "Cancelling Subscriptions",
    content:
      "Users can cancel their subscriptions at any time. Upon cancellation, users will still be able to use the service for the remainder of their current billing cycle, but they will not be charged for the next billing cycle.",
  },
  {
    title: "Special Circumstances",
    content:
      "If a user is unable to use the service properly due to technical issues or other reasons, they can contact our customer support team. We will review the situation and consider a refund or compensation at our discretion.",
  },
  {
    title: "Contact Information",
    content:
      "For refund requests or other related inquiries, please contact our customer support team via email: gzh821655475@gmail.com",
  },
];
</script>
