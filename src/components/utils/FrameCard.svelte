<script>
  import viewport from "../../utils/useViewportAction";

  // your script goes here
</script>

<div class="relative -ml-4">
  <!--  -->
  <div class="back-window absolute !z-0 bg-gray-200 top-4 left-8" />
  <!--  -->
  <div class="window relative z-10">
    <div class="titlebar bg-gradient-to-b from-gray-500 to-gray-600">
      <div class="buttons">
        <div class="close">
          <a class="closebutton" href="#home"><span><strong>x</strong></span></a
          >
          <!-- close button link -->
        </div>
        <div class="minimize">
          <a class="minimizebutton" href="#home">
            <span><strong>&ndash;</strong></span>
          </a>
          <!-- minimize button link -->
        </div>
        <div class="zoom">
          <a class="zoombutton" href="#home"><span><strong>+</strong></span></a>
          <!-- zoom button link -->
        </div>
      </div>
      <!-- Food Designer -->
      <!-- window title -->
    </div>
    <div
      class="content flex flex-col items-center justify-center h-full"
      xyz="fade-100% down-3 stagger-2"
    >
      <img
        src="/images/accountant.png"
        alt="doctor"
        class="h-[60%] w-auto object-cover"
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      />
      <div
        class="text-2xl h-font mt-4 font-bold uppercase px-5 pb-4 text-center"
        use:viewport
        on:enterViewport={(e) => e.target.classList.add("xyz-in")}
        on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
      >
        Environmental Practitioner
      </div>
    </div>
  </div>
</div>

<style>
  /* window BEGIN */

  a {
    text-decoration: none;
  }

  span {
    line-height: 9px;
    vertical-align: 50%;
  }

  .window {
    background: #fff;
    width: 90%;
    height: 70vh;
    margin: auto;
    border: 1px solid #acacac;
    border-radius: 10px;
    box-shadow: 0px 0px 12.5px #acacac;
  }

  .back-window {
    width: 90%;
    height: 70vh;
    margin: auto;
    border: 1px solid #acacac;
    border-radius: 10px;
    box-shadow: 0px 0px 12.5px #acacac;
  }

  .titlebar {
    width: 100%;
    height: 40px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    user-select: none;
    cursor: default;
  }

  .buttons {
    padding-left: 8px;
    padding-top: 12px;
    float: left;
    line-height: 0px;
  }

  /* .buttons:hover a {
    visibility: visible;
  } */

  .close {
    background: #ff5c5c;
    font-size: 9pt;
    width: 15px;
    height: 15px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
  }

  .close:active {
    background: #c14645;
    border: 1px solid #b03537;
  }

  .close:active .closebutton {
    color: #4e0002;
  }

  .closebutton {
    color: #820005;
    visibility: hidden;
    cursor: default;
  }

  .minimize {
    background: #ffbd4c;
    font-size: 9pt;
    line-height: 15px;
    margin-left: 4px;
    width: 15px;
    height: 15px;
    border: 1px solid #e09e3e;
    border-radius: 50%;
    display: inline-block;
  }

  .minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
  }

  .minimize:active .minimizebutton {
    color: #5a2607;
  }

  .minimizebutton {
    color: #9a5518;
    visibility: hidden;
    cursor: default;
  }

  .zoom {
    background: #00ca56;
    font-size: 9pt;
    line-height: 15px;
    margin-left: 6px;
    width: 15px;
    height: 15px;
    border: 1px solid #14ae46;
    border-radius: 50%;
    display: inline-block;
  }

  .zoom:active {
    background: #029740;
    border: 1px solid #128435;
  }

  .zoom:active .zoombutton {
    color: #003107;
  }

  .zoombutton {
    color: #006519;
    visibility: hidden;
    cursor: default;
  }
</style>
