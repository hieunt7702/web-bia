export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  abv: string;
  volume: string;
}

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'Bia hơi Hà Nội Bom 50l', 
    category: 'Bom 50L', 
    price: 'Liên hệ', 
    image: '/images/product/bom_no.png',
    description: 'Bia hơi Hà Nội chính hãng được ủ từ hoa bia Saaz và malt đại mạch tuyệt hảo. Đóng gói trong bom 50L tiêu chuẩn, đáp ứng nhu cầu phục vụ số lượng lớn tại các điểm bán, nhà hàng, quán nhậu chuyên nghiệp. Bảo quản tốt nhất ở nhiệt độ 2-4 độ C để giữ trọn vẹn hương vị truyền thống, bọt mịn và độ êm mượt đặc trưng.',
    abv: '4.0%',
    volume: '50 Lít'
  },
  { 
    id: 2, 
    name: 'Bia hơi Hà Nội Bom 30l', 
    category: 'Bom 30L', 
    price: 'Liên hệ', 
    image: '/images/product/bom_no.png',
    description: 'Phiên bản bom 30L nhỏ gọn hơn, phù hợp cho các quán có không gian vừa và nhỏ hoặc phục vụ các bữa tiệc gia đình, sự kiện quy mô vừa. Vẫn giữ nguyên chất lượng tuyệt hảo của Bia hơi Hà Nội với quy trình ủ lên men tự nhiên, mang lại cảm giác sảng khoái tức thì.',
    abv: '4.0%',
    volume: '30 Lít'
  },
  { 
    id: 3, 
    name: 'Bia hơi Hà Nội chai 1l (lốc 6 chai)', 
    category: 'Chai 1L', 
    price: 'Liên hệ', 
    image: '/images/product/1l_no.png',
    description: 'Thiết kế chai pet 1L tiện dụng, an toàn, dễ dàng bảo quản trong tủ lạnh gia đình. Lốc 6 chai phù hợp làm quà biếu tặng hoặc thưởng thức cùng người thân trong các bữa cơm sum họp. Chất bia vẫn 100% là bia tươi từ nhà máy Habeco.',
    abv: '4.0%',
    volume: '1 Lít / Chai'
  },
  { 
    id: 4, 
    name: 'Bia hơi Hà Nội Keg 1l', 
    category: 'Keg 1L', 
    price: 'Liên hệ', 
    image: '/images/product/keg2_no.png',
    description: 'Keg inox 1L cao cấp, giữ lạnh cực tốt và sang trọng. Sự lựa chọn hoàn hảo để trải nghiệm bia hơi chuẩn vị tại nhà hoặc mang đi dã ngoại. Thiết kế nắp bật thông minh giúp giữ bọt và áp suất tối ưu.',
    abv: '4.0%',
    volume: '1 Lít'
  },
  { 
    id: 5, 
    name: 'Bia hơi Hà Nội Keg 2l', 
    category: 'Keg 2L', 
    price: 'Liên hệ', 
    image: '/images/product/keg1_no.png',
    description: 'Keg inox 2L dung tích lớn hơn, thiết kế đẳng cấp. Lựa chọn tuyệt vời cho các buổi tiệc nhỏ. Keg inox giúp bia giữ được độ lạnh sâu, bọt dày và hương thơm thoang thoảng của hoa bia tự nhiên trong suốt thời gian dài.',
    abv: '4.0%',
    volume: '2 Lít'
  },
];
