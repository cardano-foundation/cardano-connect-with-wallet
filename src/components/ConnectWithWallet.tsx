type ConnectWithWalletProps = {
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const ConnectWithWallet = ({
  label = 'Connect with wallet',
  className,
  disabled,
  onClick,
}: ConnectWithWalletProps) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default ConnectWithWallet;
