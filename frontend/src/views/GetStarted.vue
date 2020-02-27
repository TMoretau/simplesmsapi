<template>
  <div class="getStarted">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <h1>Send SMS with a simple API</h1>
          <p>
            <b>SimpleSMSAPI</b> is an easy to use API to send SMS to anywhere in the world.
          </p>
          <p>
            We provides a REST API to our customer. It is very simple to use.
          </p>
          <h3>Examples</h3>
          <CodeBox method="post" url="/api/sms" language="json">
<pre>
{
  "apiKey": "a1b2c3d4e5f6g7h8j9k0",
  "phone": "+33123456789",
  "message": "This is a test message!"
}</pre>
          </CodeBox>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeBox from '@/components/CodeBox.vue';

export default {
  name: 'home',
  components: {
    CodeBox,
  },
};
</script>

<style lang="scss" scoped>
.getStarted {
  padding: 50px 0;
}
</style>
