export const ToolCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="card bg-base-200 shadow-sm border-b-2 p-4 items-center">
      {children}
    </div>
  );
};
