<template>
  <div class="getStarted">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <h1>Send SMS with a simple API</h1>
          <p>
            <b>SimpleSMSAPI</b> is an easy to use API to send SMS to anywhere in the world.
          </p>
          <h3>Examples</h3>
          <b-tabs>
            <b-tab title="Command line" active>
              <p>I'm the first tab</p>
            </b-tab>
            <b-tab title="Python">
              <p>
                import requests
resp = requests.post('https://textbelt.com/text', {
  'phone': '5557727420',
  'message': 'Hello world',
  'key': 'textbelt',
})
print(resp.json())
              </p>
            </b-tab>
            <b-tab title="Disabled"><p>I'm a disabled tab!</p></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>

<style lang="scss" scoped>
.getStarted {
  padding: 50px 0;
}
</style>
