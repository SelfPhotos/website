<template>
  <div class="d-flex justify-center px-16" style="padding-top: 40px">
    <div style="max-width: 1296px; width: 100%">
      <h1>Disclaimer</h1>
      <br />
      <div v-for="(item, index) in arr" :key="index">
        <h3>{{ index + 1 }}. {{ item.title }}</h3>
        <p>
          {{ item.content }}
        </p>
        <template v-if="item.arr">
          <ul>
            <li v-for="(arrItem, index) in item.arr" :key="index">
              <strong>{{ arrItem.title }}</strong
              >{{ arrItem.content }}
            </li>
          </ul>
        </template>
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr = [
  {
    title: "Service Description",
    content:
      "Our website offers a video generation service that allows users to upload videos from their Discord servers and generate videos in different styles. Users can subscribe to our service to earn points, which can be used to unlock more features and options.",
  },
  {
    title: "Content Restrictions",
    content:
      "To maintain the safety, compliance, and ethical standards of our community and service, users must adhere to the following rules when using our video generation service:",
    arr: [
      {
        title: "No NSFW or Adult Content: ",
        content:
          "Users are strictly prohibited from using our video generation service to create, upload, share, or distribute any inappropriate content, including but not limited to pornographic, obscene, violent, hateful, terrorist, child abuse, or any other content that violates laws and regulations.",
      },
      {
        title: "Adhere to Community Guidelines: ",
        content:
          "Users must comply with all applicable laws and regulations, as well as our community guidelines and those of the Discord platform. Any violation of these guidelines will result in account suspension or termination and forfeiture of points.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not responsible for the content uploaded by users, but we reserve the right to monitor and review uploaded content at any time. For any violations of the above rules, we will take appropriate actions, including but not limited to removing the violating content, suspending or terminating the user account, and reporting to relevant law enforcement agencies.",
  },
  {
    title: "Changes and Updates",
    content:
      "We reserve the right to modify or update this disclaimer at any time. Any changes will be posted on the website, and continued use of the service after such changes will constitute acceptance of the new terms.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or need further information, please contact us at gzh821655475@gmail.com.",
  },
];
</script>

<style>
</style>
