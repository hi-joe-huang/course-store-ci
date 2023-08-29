<template>
  <div>
    <div class="flex flex-wrap md:flex-nowrap gap-4">
      <div class="w-full">
        <checkout-cart/>
      </div>
      <div class="w-full max-w-none md:max-w-[380px]">
        <checkout-total/>
      </div>
    </div>
    <div>
      <fundraising-list/>
    </div>
  </div>
</template>