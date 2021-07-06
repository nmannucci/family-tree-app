<script>
  export let name;
  export let title;
</script>

<div class="family-member-block">
  <div class="block-layout">
    <div class="profile-pic rounded-full bg-red-300 mb-2" />
    <h2>{name}</h2>
    <h4>{title}</h4>
  </div>
</div>

<style>
  .profile-pic {
    width: 70px;
    height: 70px;
  }

  .block-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .family-member-block {
    display: inline-block;
    background: white;
    margin-right: 24px;
    margin-top: 24px;
    padding: 12px 36px;
    box-shadow: 0px 17px 37px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
  }

  .family-member-block h2,
  .family-member-block h4 {
    text-align: center;
  }

  .family-member-block h2 {
    font-weight: 600;
    font-size: 18px;
  }

  .family-member-block h4 {
    color: #959aa3;
    font-weight: 600;
    font-size: 14px;
  }
</style>
