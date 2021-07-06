<script>
  import { fly } from "svelte/transition";
  export let hideContactPanel;
</script>

{#if hideContactPanel}
  <div class="info-card" transition:fly={{ duration: 500, x: -200 }}>
    <slot />
    <div class="info-section">
      <div class="info-block">
        <h2>Contact Info</h2>
        <div class="info-item">
          <h3>Email:</h3>
          <p>nmannucci1@gmail.com</p>
        </div>
        <div class="info-item">
          <h3>Phone Number</h3>
          <p>nmannucci1@gmail.com</p>
        </div>
      </div>
      <div class="info-block">
        <h2>Socials</h2>
        <div class="info-item">
          <h3>Instagram:</h3>
          <p>@nico_mannucci</p>
        </div>
        <div class="info-item">
          <h3>Twitter:</h3>
          <p>@nico_mannucci</p>
        </div>
      </div>
      <div class="info-block">
        <h2>Fun Facts</h2>
        <div class="info-item">
          <h3>Favorite Song</h3>
          <p>Marry You by Bruno Mars</p>
        </div>
        <div class="info-item">
          <h3>Favorite Color</h3>
          <p>Tourqoise</p>
        </div>
        <div class="info-item">
          <h3>Favorite Color</h3>
          <p>Tourqoise</p>
        </div>
        <div class="info-item">
          <h3>Favorite Color</h3>
          <p>Tourqoise</p>
        </div>
        <div class="info-item">
          <h3>Favorite Color</h3>
          <p>Tourqoise</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .info-card {
    width: 335px;
    height: 85vh;
    position: fixed;
    left: 24px;
    top: 10vh;
    margin-top: 16px;
    z-index: 100;
    padding: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
    background: #ffffff;
    box-shadow: 0px 17px 37px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
  }

  .info-section {
    align-self: left;
    overflow: scroll;
    /* transform: translateY(0%); */
  }

  .info-block {
    margin-bottom: 24px;
  }

  .info-block h2 {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #959aa3;
  }

  .info-item {
    margin-bottom: 12px;
  }

  .info-item h3 {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .info-item p {
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
</style>
