<template>
   <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
   <button :class ="[
      primary ? (disabled ? 'primary-disabled' : 'primary-default') : (disabled ? 'secondary-disabled' : 'secondary-default'), 
      'baseButton',
      size === 'small' ? 'small' : '',
      size === 'medium' ? 'medium' : '',
      size === 'large' ? 'large' : '',
      ]">{{ buttonText }}</button>
</template>

<script>
export default {
   props: {
      buttonText: {
         type: String,
         default: () => "Button"
      },
      primary: {
         type: Boolean,
         default: () => true
      },
      disabled: {
         type: Boolean,
         default: () => true
      },
      size: {
         type: String,
         default: () => "small"
      }
   }
}
</script>

<style scoped>
.baseButton {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 6px 19px;
   gap: 10px;

   position: absolute;

   border-radius: 10px;

   font-family: "Poppins";
   font-style: normal;
   font-weight: 500;
   /* identical to box height */
   display: flex;
   align-items: center;
}

.small{
   width: 80px;
   height: 27px;
   font-size: 14px;
   line-height: 21px;
}

.medium{
   width: 95px;
   height: 30px;
   font-size: 16px;
   line-height: 24px;
}
.large{
   width: 107px;
   height: 37px;
   font-size: 16px;
   line-height: 24px;
}

.primary-default {
   background: var(--color-bitcamp);
   color: var(--color-white);
   border: 0px
}

.secondary-default {
   background: var(--color-white);
   box-sizing: border-box;
   border: 2px solid var(--color-atlantic);
   color: var(--color-atlantic);
}

.primary-disabled {
   opacity: 0.5;
   background: var(--color-bitcamp);
   color: var(--color-white);
   border: 0px;
   cursor: not-allowed;
}

.secondary-disabled {
   opacity: 0.5;
   background: var(--color-white);
   box-sizing: border-box;
   border: 2px solid var(--color-atlantic);
   color: var(--color-atlantic);
   cursor: not-allowed;
}

</style>