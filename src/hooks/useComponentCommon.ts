import {CommonComponentProps} from '@/defaultProps';
import {pick} from 'lodash-es';
import {computed} from 'vue';

const useComponentCommon = (
  props: Readonly<Partial<CommonComponentProps> & {isEditing: boolean}>,
  picks: string[]
) => {
  const styleProps:any = computed(() => pick(props, picks));
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

export default useComponentCommon;
