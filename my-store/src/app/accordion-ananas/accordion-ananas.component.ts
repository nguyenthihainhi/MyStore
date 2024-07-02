import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-ananas',
  templateUrl: './accordion-ananas.component.html',
  styleUrl: './accordion-ananas.component.css'
})
export class AccordionAnanasComponent {

  accordionList: any[] = [
    {
      header: 'Thông tin sản phẩm',
      body: `<h6>
    <p><span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;- Gender: Unisex\n- Size run: 35 - 46\n- Upper: Canvas NE\n- Outsole: Rubber\n- Có thêm 01 bộ dây đi kèm&quot;}"
            data-sheets-userformat="{&quot;2&quot;:12673,&quot;3&quot;:{&quot;1&quot;:0},&quot;10&quot;:1,&quot;11&quot;:4,&quot;15&quot;:&quot;Arial&quot;,&quot;16&quot;:14}">Gender:
            Unisex<br>
            Size run: 35 – 46<br>
            Upper: Canvas NE<br>
            Outsole: Rubber<br>
            Có thêm 01 bộ dây đi kèm</span></p>
    <p><a href="https://ananas.vn/wp-content/uploads/Ananas_SizeChart.jpg"><img
                class="alignnone wp-image-886913"
                src="https://ananas.vn/wp-content/uploads/Ananas_SizeChart.jpg" alt="" width="398"
                height="563"
                srcset="https://ananas.vn/wp-content/uploads/Ananas_SizeChart.jpg 481w, https://ananas.vn/wp-content/uploads/Ananas_SizeChart-212x300.jpg 212w, https://ananas.vn/wp-content/uploads/Ananas_SizeChart-184x260.jpg 184w, https://ananas.vn/wp-content/uploads/Ananas_SizeChart-353x500.jpg 353w"
                sizes="(max-width: 398px) 100vw, 398px"></a></p>
</h6>`
    },
    {
      header: 'Quy định đổi sản phẩm',
      body: `<h6>
    <ul>
        <li>Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.</li>
        <li>Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản
            phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.</li>
        <li>Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.</li>
        <li>Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.</li>
        <li>Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có
            thể đổi sang 01 sản phẩm khác:<br>
            - Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng
            chênh lệch tại thời điểm đổi (nếu có).<br>
            - Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.
        </li>
        <li>Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng
            chọn sản phẩm khác.</li>
        <li>Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.</li>
    </ul>
</h6>`
    },

    {
      header: 'Bảo hành thế nào',
      body: `<h6><p>Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:</p>
                    <p>Địa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.<br>
                    Hotline: 028 2211 0067</p>
                    </h6>`
    }];

}
