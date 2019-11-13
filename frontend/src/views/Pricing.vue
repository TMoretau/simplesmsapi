<template>
  <div class="pricing">
    <h1 class="pricing-title">
      <strong>Simple</strong> and <strong>easy</strong> sms API at the best prices
    </h1>
    <b-container class="pricing-content">
      <b-row>
        <b-col md="7">
          <div class="table">
            <h1 class="table-title">SMS Pricing</h1>
            <table>
              <tr>
                <th>SMS to</th>
                <th>Unit price</th>
                <th>Starting at</th>
              </tr>
              <tr>
                <td>France <br />Guadeloupe, Reunion Island, Mayotte, French Guyana
                & Martinique</td>
                <td>1 credit</td>
                <td>€ 0.05</td>
              </tr>
              <tr>
                <td>Acores, Germany, Austria, Belgium, Bulgaria, Croatia, Cyprus, Cyprus, Denmark,
  Spain, Estonia, Finland, Greece, Hungary, Ireland, Italy, Latvia, Lithuania,
  Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania,
  United Kingdom, Slovakia, Slovenia, Sweden, Czech Republic, Gibraltar,
  Iceland, Liechtenstein, Saint Pierre & Miquelon</td>
                <td>2 credits</td>
                <td>€ 0.10</td>
              </tr>
              <tr>
                <td>Rest of the world</td>
                <td>4 credits</td>
                <td>€ 0.20</td>
              </tr>
            </table>
          </div>
        </b-col>
        <b-col md="5">
          <div class="table">
            <h1 class="table-title">Credit Pricing</h1>
            <table style="width:100%" class="text-center">
              <tr>
                <th class="text-center">Amount</th>
                <th style="width:50%">Price</th>
              </tr>
              <tr>
                <td class="text-center"><b>50</b> credits</td>
                <td>€ 5</td>
              </tr>
              <tr>
                <td class="text-center"><b>100</b> credits</td>
                <td>€ 8</td>
              </tr>
              <tr>
                <td class="text-center"><b>200</b> credits</td>
                <td>€ 15</td>
              </tr>
              <tr>
                <td class="text-center"><b>500</b> credits</td>
                <td>€ 30</td>
              </tr>
              <tr>
                <td class="text-center"><b>1200</b> credits</td>
                <td>€ 60</td>
              </tr>
            </table>
          </div>
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
.pricing {
  background: #F6F6F9;
  color: #FFFFFF;
  padding-bottom: 50px;
  &-content {
    margin-top: 50px;
  }
  &-title {
    position: relative;
    min-height: 130px;
    background: linear-gradient(to right, #2062cd, #4aa5f7);
    line-height: 130px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .table {
    background: #FFFFFF;
    border-radius: 30px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    &-title {
      text-align: center;
      color: #4795f8;
      padding: 15px 0;
      font-weight: bold;
    }
      th {
        border: 0;
        text-align: center;
        text-transform: uppercase;
        opacity: .4;
        font-weight: 400;
        width: 25%;
      }
      td:first-of-type {
        text-align: center;
        width: 50%;
        opacity: .75;
      }
      tr:nth-child(2) {
        border-width: 3px;
      }
      td {
        padding: 15px 30px;
        text-align: center;
        &:first-child {
                  text-align: left;
        }
      }
  }
}
</style>
