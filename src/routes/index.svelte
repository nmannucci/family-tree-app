<script>
  import { onMount } from "svelte";
  import familyStore from "../family-store";

  // Create component that can receive the profile data from family tree that can be passed on to the slug route.
  // Create a component that simply calls the route when a node is clicked.
  // Put an anchor tag within each node element using vanilla js and access inner html to put an anchor tag around it.

  let parsedTree = {
    name: "Father",
    marriages: [
      {
        spouse: { name: "Mother" },
        children: [
          { name: "Child", marriages: [{ spouse: { name: "Girlfriend" } }] },
          { name: "Child Two", marriages: [{ spouse: {} }] },
        ],
      },
    ],
  };

  let element;
  let routeName;
  onMount(() => {
    dTree.init($familyStore, {
      target: element,
      debug: true,
      height: 800,
      width: 1200,
      class: "node",
      textClass: "nodeText",
      nodeWidth: 150,
      callbacks: {
        nodeClick: function (name, id) {
          routeName = name;
          console.log(name, id);
        },
        nodeHeightSeperation: function (nodeWidth, nodeMaxHeight) {
          nodeMaxHeight = 200;
          nodeWidth = 120;
          return nodeMaxHeight;
        },
      },
    });
  });
</script>

<svelte:head>
  <title>Family Tree</title>
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/d3-dtree/dist/dTree.min.js"></script>
</svelte:head>

<section class="p-36px bg-hex-F8FBFD">
  <h1 class="font-bold text-3xl mb-18px">Family Tree</h1>
  <div
    id="graph"
    class="border-2 border-gray-300 rounded-lg"
    bind:this={element}
  />
</section>

<style>
  #graph :global(div) {
    color: black;
  }

  /* These classes might get purged when I bundle it bc they are labeled as unused CSS */

  .linage {
    fill: none;
    stroke: #6b7280;
    stroke-width: 2px;
    stroke-linejoin: round;
  }
  .marriage {
    fill: none;
    stroke: #6b7280;
    stroke-dasharray: 4;
    stroke-width: 2px;
  }
  .marriageNode {
    background: purple;
  }
  .node {
    width: 100px;
    cursor: pointer;
    background-color: white;

    border-radius: 10px;
    border-style: solid;
    border-width: 2.5px;
    border-color: #d1d5db;
    padding: 8px 0px;

    transition: all;
    transition-duration: 300ms;
  }

  .node:before {
    content: "";
    display: block;
    width: 45px;
    height: 45px;
    margin: auto;
    margin-bottom: 8px;

    background-color: #818cf8;
    border-radius: 90px;
  }

  .node:hover {
    border-color: #10b981;
  }

  .nodeText {
    font-size: 18px;
    font-weight: 600;
    box-sizing: border-box;
    color: black;
  }
</style>
