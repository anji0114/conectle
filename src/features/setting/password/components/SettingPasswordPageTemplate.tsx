
import { Input } from '@/components/ui/Input';
import { FormRow } from '@/components/view/FormRow';

export const SettingPasswordPageTemplate = () => {
  return (
    <div className='pb-10'>
      <h2 className='border-b border-slate-200 pb-4 text-xl font-bold'>
        パスワード設定
      </h2>
      <div className='mt-10 space-y-6'>
        <FormRow label='現在のパスワード'>
          <Input variant='fill' />
        </FormRow>
      </div>
    </div>
  );
};
