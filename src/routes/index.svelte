<script>
  import { onMount } from "svelte";
  import familyStore from "../family-store";

  let element;
  onMount(() => {
    dTree.init([$familyStore], {
      target: element,
      debug: true,
      height: 800,
      width: 1200,
      nodeWidth: 150,
      callbacks: {
        nodeClick: function (name, extra, id) {
          console.log(name, id);
        },
        nodeHeightSeperation: function (nodeWidth, nodeMaxHeight) {
          nodeMaxHeight = 120;
          nodeWidth = 120;
          return nodeWidth;
        },
        // textRenderer: function (name, extra, textClass) {
        //   // THis callback is optinal but can be used to customize
        //   // how the text is rendered without having to rewrite the entire node
        //   // from screatch.
        //   if (extra && extra.nickname)
        //     name = name + " (" + extra.nickname + ")";
        //   return "<p align='center' class='" + textClass + "'>" + name + "</p>";
        // },
        // nodeRenderer: function (
        //   name,
        //   x,
        //   y,
        //   height,
        //   width,
        //   extra,
        //   id,
        //   nodeClass,
        //   textClass,
        //   textRenderer
        // ) {
        //   // This callback is optional but can be used to customize the
        //   // node element using HTML.
        //   let node = "";
        //   node += "<div ";
        //   node += 'style="height:100%;width:100%;" ';
        //   node += 'class="' + nodeClass + '" ';
        //   node += 'id="node' + id + '">\n';
        //   node += textRenderer(name, extra, textClass);
        //   node += "</div>";
        //   return node;
        // },
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
    class="border-2 border-blue-200 rounded-lg "
    bind:this={element}
  />
</section>

<style>
  #graph :global(div) {
    color: black;
  }

  .linage {
    fill: none;
    stroke: black;
    stroke-width: 2px;
  }
  .marriage {
    fill: none;
    stroke: purple;
    stroke-width: 2px;
  }
  .marriageNode {
    background: purple;
  }
  .node {
    width: 100px;
    cursor: pointer;
    background-color: lightblue;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    padding: 8px;

    transition: all;
    transition-duration: 300ms;
  }
  .node:hover {
    transform: scale(1.05);
  }

  .nodeText {
    font: 24px;
    font-weight: 500;
    box-sizing: border-box;
  }
</style>
