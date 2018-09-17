from django.db import models

  # Create your models here.
class Users(models.Model) :
    UserID = models.IntegerField(primary_key=True)
    UserName = models.CharField(max_length=100)
    Password = models.CharField(max_length=80)
class ProductGroup(models.Model):
    ProductGroupID = models.IntegerField(primary_key=True)
    ProductGroupName = models.CharField(max_length=100)
class Product(models.Model):    
    ProductID = models.IntegerField(primary_key=True)
    Barcode = models.CharField(max_length=20)
    ProductName = models.CharField(max_length=100)
    ProductGroupID = models.ForeignKey(ProductGroup,on_delete=models.DO_NOTHING,null=False)
    SalesPrice = models.DecimalField(decimal_places=4,max_digits=20)
    PurchasePrice = models.DecimalField(decimal_places=4,max_digits=20)
    Stock = models.DecimalField(decimal_places=4,max_digits=20)
class Customer(models.Model):
    CustomerID = models.IntegerField(primary_key=True)
    CustomerCode = models.CharField(max_length=20)
    CustomerName = models.CharField(max_length=100)
    Address = models.CharField(max_length=200)
class InvTransactionMaster(models.Model):    
    InvTransactionMasterID = models.IntegerField(primary_key=True)
    TransactionDate = models.DateField()
    VoucherType = models.CharField(max_length=5)
    CustomerID = models.ForeignKey(Customer,on_delete=models.DO_NOTHING,null=False)
    CustomerName = models.CharField(max_length=100) 
    Address = models.CharField(max_length=200)
    GrandTotal = models.DecimalField(decimal_places=4,max_digits=20)
    IsActive = models.BooleanField
class InvTransactionDetails(models.Model):
    InvTransactionDetailsID = models.IntegerField(primary_key=True)    
    InvTransactionMasterID = models.ForeignKey(InvTransactionMaster,on_delete=models.DO_NOTHING,null=False)
    ProductID = models.ForeignKey(Product,on_delete=models.DO_NOTHING,null=False)
    Quantity = models.DecimalField(decimal_places=4,max_digits=20)
    UnitPrice = models.DecimalField(decimal_places=4,max_digits=20)
    Discount = models.DecimalField(decimal_places=4,max_digits=20)
    Total = models.DecimalField(decimal_places=4,max_digits=20)


