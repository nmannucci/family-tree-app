<script>
  import FamilyMemberBlock from "./FamilyMemberBlock.svelte";
</script>

<div class="family-section">
  <h3>Immediate Family</h3>
  <div class="family-cards-section">
    <FamilyMemberBlock name="Alexis Lim" title="Spouse" />
    <FamilyMemberBlock name="Katherine Louie" title="Parent" />
    <FamilyMemberBlock name="Tony Mannucci" title="Parent" />
    <FamilyMemberBlock name="Matthew Mannucci" title="Sibling" />
    <FamilyMemberBlock name="Libby Mannucci" title="Sibling" />
    <FamilyMemberBlock name="Luca Mannucci" title="Child" />
    <FamilyMemberBlock name="Johhny Mannucci" title="Child" />
  </div>
</div>

<style>
  .family-section {
    margin-bottom: 12px;
  }
  .family-section h3 {
    font-weight: 600;
    font-size: 16px;
    color: #6e84a3;
  }

  .family-cards-section {
    /* Transforming cards section up 8px to have a margin of 16px from heading since each block has a margin top of 24px */
    transform: translateY(-8px);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
</style>
