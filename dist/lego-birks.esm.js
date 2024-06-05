import { without, mapValues, pick } from 'lodash-es';
import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, createTextVNode, toDisplayString, createElementBlock, withModifiers, Fragment, renderList, mergeProps } from 'vue';

const commonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '373px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
};
const isEditingProps = {
    isEditing: {
        type: Boolean,
        default: false,
    }
};
const textDefaultProps = {
    // basic props - font styles
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps,
};
const shapeDefaultProps = {
    backgroundColor: '',
    ...commonDefaultProps,
};
const imageDefaultProps = {
    src: 'test.url',
    ...commonDefaultProps,
};
const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'src');
const shapeStylePropsNames = without(Object.keys(shapeDefaultProps), '');
const transformToComponentProps = (props) => {
    const mapProps = mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item,
        };
    });
    return {
        ...mapProps,
        ...isEditingProps,
    };
};

const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    const handleClick = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick,
    };
};

const defaultProps$2 = transformToComponentProps(textDefaultProps);
var script$3 = defineComponent({
    name: 'LText',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        ...defaultProps$2,
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
        return {
            styleProps,
            handleClick,
        };
    },
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-test-component",
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "onClick"]))
}

script$3.render = render$3;
script$3.__scopeId = "data-v-6bf95b7a";
script$3.__file = "src/components/LText/LText.vue";

script$3.install = (app) => {
    app.component(script$3.name, script$3);
};

const defaultProps$1 = transformToComponentProps(imageDefaultProps);
var script$2 = defineComponent({
    name: 'LImage',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        ...defaultProps$1,
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames);
        return {
            styleProps,
            handleClick,
        };
    },
});

const _hoisted_1$1 = ["src"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("img", {
    src: _ctx.src,
    style: normalizeStyle(_ctx.styleProps),
    class: "l-image-component",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
  }, null, 12 /* STYLE, PROPS */, _hoisted_1$1))
}

script$2.render = render$2;
script$2.__scopeId = "data-v-1e970aa2";
script$2.__file = "src/components/LImage/LImage.vue";

script$2.install = (app) => {
    app.component(script$2.name, script$2);
};

const defaultProps = transformToComponentProps(shapeDefaultProps);
var script$1 = defineComponent({
    name: 'LShape',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        ...defaultProps,
    },
    setup(props) {
        const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
        return {
            styleProps,
            handleClick,
        };
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-shape-component",
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, null, 4 /* STYLE */))
}

script$1.render = render$1;
script$1.__file = "src/components/LShape/LShape.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};

var script = defineComponent({
    name: 'FinalPage',
    props: {
        page: {
            type: Object,
        },
        components: {
            type: Object,
            required: true,
        }
    }
});

const _hoisted_1 = ["id"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: "final-page",
    style: normalizeStyle(_ctx.page && _ctx.page.props)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.components, (item) => {
      return (openBlock(), createElementBlock("div", {
        key: item.id,
        id: `component-${item.id}`
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(item.name), mergeProps({ ref_for: true }, item.props), null, 16 /* FULL_PROPS */))
      ], 8 /* PROPS */, _hoisted_1))
    }), 128 /* KEYED_FRAGMENT */))
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "src/components/FinalPage/FinalPage.vue";

script.install = (app) => {
    app.component(script.name, script);
};

const components = [script$3, script$2, script$1, script];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
var index = {
    install,
};

export { script as FinalPage, script$2 as LImage, script$1 as LShape, script$3 as LText, index as default, imageDefaultProps, imageStylePropsNames, install, shapeDefaultProps, shapeStylePropsNames, textDefaultProps, textStylePropNames };
