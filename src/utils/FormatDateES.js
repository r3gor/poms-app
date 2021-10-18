export const FormatDateES = (date) => {
    
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diembrinos'
  ]

  return `${d} de ${months[m]} de ${y}`
}
