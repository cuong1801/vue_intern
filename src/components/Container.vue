<template>
  <div>
    <h1>Vue Modal - Demos</h1>

    <h2>Inline HTML</h2>
    <Modal btnText="Press me, senpai 😊"
            modalContent="
            <div>
              <h2> Hello I am a modal</h2>
              <p>I like stating the obvious: <b>the obvious</b></p>
              <p>Now, try this trick: <code>Ctrl + Shift + W </code> 😉</p>
            </div>
            "
            :closeBtn="true"
            closeBtnContent="
            <span>X</span>
            "
    />

    <h2>Multiple Buttons/Content mode</h2>
    <Modal :doppelMode="true"
      :modals="[
      {
        btnText: 'Press me 1',
        modalContent: 'This is <strong>the</strong> content 1'
      },
        {
        btnText: 'Press me 2',
        modalContent: '<img src=\'https://media.giphy.com/media/5exwXWg9u7yow/giphy.gif\'>'
      },
      {
        btnText: 'Press me 3',
        modalContent: 'This is the <h3>content 3</h3>'
      }
      ]"
      :showNav="true"
    />

    <h2>Passing component/s</h2>
    <Modal btnText="Press me, senpai 😊"
            :closeBtn="true"
            closeBtnContent="<span>X</span>"
    >
      <ExampleComponent/>
    </Modal>
  </div>
</template>

<script>
import Modal from "@melmacaluso/vue-modal"
import ExampleComponent from './ExampleComponent'
export default {
  components: {
    ExampleComponent
  }
};
</script>

<style lang="scss">
  button {
    font-size: 1.25rem;
    border-radius: 3%;
    background-color: #f63954;
    border-color: #f63954;
    color: #fff;
    font-weight: 500;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    cursor: pointer;
    margin-bottom: 2rem;
    &:hover {
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
      background-color: #f55c72;
    }
  }
  .modal, .content {
      background: #fff;
      width: 80%;
      max-width: 480px;
      height: 200px;
      max-height: 250px;
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      border: 1px solid darkslategray;
      padding: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      code {
        background: #e4e4e4;
        border-radius: 3px;
        padding: 0.25rem 0.5rem;
        margin: 0.5rem 0;
        color: crimson;
      }
  }
  .content {
    > div {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 100%;
      width: 100%;
      padding: 0 !important;
    }
    div {
      padding: 2rem;
      height: 100%;
    }
    img {
      width: auto;
      height: 150px;
    }
  }
  h2 {
    margin-top: 3rem;
  }
  .navigation {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    max-width: 480px;
}
</style>
