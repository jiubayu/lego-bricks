import { CommonComponentProps } from '@/defaultProps';
declare const useComponentCommon: (props: Readonly<Partial<CommonComponentProps> & {
    isEditing: boolean;
}>, picks: string[]) => {
    styleProps: any;
    handleClick: () => void;
};
export default useComponentCommon;
