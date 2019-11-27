<template>
<div class="login-card"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="login-card-body"
    :style="{
      'width': body_width,
    }"
  >
    <a href="#" class="login-button">
      <img class="login-icon" src="@/assets/svg/simple-logo.svg">
      <span class="login-text">Vusqa Login</span>
    </a>
    <div class="login-help">
      <a href="#" class="help-text">need help with login?</a>
      <a href="#" class="sign-up-text">Sign Up</a>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '340px'
    },
    height: {
      type: String,
      default: '108px'
    },
    body_width: {
      type: String,
      default: '280px'
    }
  }
}
</script>

<style lang="scss" scoped>

.login-card {
  background-color: $Light;
  border: 1px solid rgba(169, 169, 169, 0.4);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-card-body {
    margin-top: 30px;
    
    .login-button {
      background-color: $VusqaBrandPrimary;
      text-decoration: none;
      color: $Light;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px 10px 0px;
      border-radius: 4px;

      .login-icon {
        margin-right: 4px;
      }

      .login-text {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 120%;
      }
    }

    .login-help {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      
      .help-text {
        text-decoration: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        line-height: 120%;
        color: $LightGrey;
      }

      .sign-up-text {
        text-decoration: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        line-height: 120%;
        color: $LightGrey;
      }
    }
  }

  

  
}

</style>