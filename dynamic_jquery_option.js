//Dynamic Select Operation in Jquery

$('#ram').change(function(){
var ram = $(this).val();
$('#show_ram').html(ram);
});

//Dynamic Keyboard Operation in Jquery
$('#primary_camera_size').keyup(function(){
var primary_camera_size =  $('#primary_camera_size').val();
$('#primary_camera_size').html(primary_camera_size);
});

//Ajax-Jquery Function

function Get_All_Sellers()
{
$.ajax({
type: 'ajax',
url: '<?= base_url("index.php/Admin/Get_All_Sellers"); ?>',
#its execute before loading
beforeSend: function(data){
$('#show_seller_number').text('Waiting');
},
success:function(data){
$('#show_seller_number').html(data);
},
error:function(){
M.toast(html:'Error! Get Seller Load');
}
});
});



//Session checking in Controller

 public function Get_All_Sellers()
 {
if($this->session->userdata('admin_username')== ""
     && $this->session->userdata('password') == ""){
     return redirect('Admin/index');
}else{
$result = $this->Model_name->Get_all_Users();
}
}


//Model to fetch details of users
public function Get_all_user()
{
	$get_seller =  $this->db->select()
	->from('seller')
	->order_by('seller_id', 'desc')
	->get();

	if($get_seller->num_rows() > 0){
		return $get_seller->result();
	}else{
		return $get_seller->result();
	}
}




// Send Model Data to View page of Sellers
public function Get_all_user()
{
$this->model_name->Sellers();
//Viewing Page
$this->load->view('Admin/Sellers');
}
?>

// Pass Model Data to View page of all Sellers
public function Get_all_user()
{
$this->model_name->Sellers();
//Viewing Page
$this->load->view('Admin/Sellers', ['seller'=>$result]);
}



// foreach uses of Seller data on View Page
<?php if(count($seller)): ?>

<?php foreach ($seller as $key => $value): ?>
echo $key.'--===>>>>'. $value;
<?php endforeach; ?>

<?php else: ?>
<?php endif; ?>




//SellerVerified is a function --- call a function on button 
<a href='<?= base_url("index.php/Admin/SellerVerified/{$sel->seller_id}") ?>' class="btn btn-sm "> </a>


//controller
public function SellerVerified($seller_id)
{
$result = $this->model_name->sellerverified_in_model_with($seller_id);	
if($result){
//setting toast message
	$this->get_flashdata('msg', 'Selected Seller Verify SuccessFully.')
	return redirect('Admin/Sellers');
}else{
	return redirect('Admin/Sellers');
}
}

//Showing Toast Message 
if($msg = $this->session->flash_data('msg')){
	echo '<script> M.toast({html:'$msg'})</script>';
}

//Date function to add somem days
'sl_date' =>date('Y-m-d', strtotime("+7 days"))


//Update By Seller Model
public function sellerverified_in_model_with($seller_id)
{
//check seller verify or not
$check_verify = $this->db->get_where('seller', ['seller_id'=>$seller_id,'verify_unverify'=>'']);
if($check_verify->num_rows() > 0){
	$this->db->where('seller_id', $seller_id)
	     ->update('seller', ['verify_unverify' => 'Verify']);
}else{
return false;
}
}






