<template>
  <div class="d-flex justify-center" style="padding-top: 40px">
    <div style="max-width: 1296px; width: 100%">
      <h1>Terms of Service</h1>
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
    title: "Acceptance of Terms",
    content:
      "By accessing and using our website and services, you agree to be bound by the following Terms of Service. These Terms apply to all visitors, users, and others who access or use the services.",
  },
  {
    title: "Description of Services",
    content:
      "We provide a subscription-based AI video generation service. Users can access monthly or annual credits through subscription plans to generate videos in different styles and specifications.",
  },
  {
    title: "User Accounts",
    content:
      "Users must create an account to access our services. Users are responsible for maintaining the accuracy and confidentiality of their account information. Users are fully responsible for all activities that occur under their account.",
  },
  {
    title: "Subscriptions and Payments",
    content:
      "Subscription plans include monthly and annual options. Fees will be automatically deducted at the time of subscription and automatically renewed each billing cycle unless the user cancels the subscription before renewal.",
  },
  {
    title: "Usage Restrictions",
    content:
      "Users may not use our services in any illegal or unauthorized manner, including but not limited to infringing on intellectual property rights, publishing false or misleading information, etc.",
  },
  {
    title: "Service Interruptions",
    content:
      "We reserve the right to modify or discontinue the service (or any part thereof) at any time without prior notice. We shall not be liable for any losses caused by any service modifications, price changes, suspensions, or interruptions.",
  },
  {
    title: "Termination",
    content:
      "We may terminate or suspend a user's access to our services at any time for any reason without notice. We may also take legal action if a user violates these Terms.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the services.",
  },
];
</script>
